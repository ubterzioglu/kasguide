# PowerShell (Windows)
$projectRoot = "C:\Users\ubter\IdeaProjects\kasguide"
$dataFile    = Join-Path $projectRoot "places\places-data.js"   # dosya sende neredeyse onu yaz
$assetsRoot  = Join-Path $projectRoot "assets"

# 1) Dosyayı oku
$content = Get-Content -Raw -LiteralPath $dataFile

# 2) places-data.js içinden tüm .jpg stringlerini çek (tek/çift tırnak destekli)
$pattern = "(?<q>['""])(?<p>[^'""]+?\.jpg)\k<q>"
$matches = [regex]::Matches($content, $pattern)

# Normalize fonksiyonu: '/assets/..' -> './assets/..' ve slashes düzenle
function Normalize-RelPath([string]$p) {
  $p2 = $p.Trim()

  # Baştaki /assets -> ./assets
  if ($p2 -like "/assets/*") { $p2 = "." + $p2 }

  # Baştaki assets -> ./assets (bazı yerlerde böyle olabiliyor)
  if ($p2 -like "assets/*") { $p2 = "./" + $p2 }

  # '././' gibi şeyleri temizle
  $p2 = $p2 -replace "^\./\./", "./"

  return $p2
}

# Diske giden absolute path'e çevir
function RelToAbs([string]$rel) {
  $rel2 = $rel -replace "^\./", ""         # './assets/...' -> 'assets/...'
  $rel2 = $rel2 -replace "/", "\"          # slash -> backslash
  return Join-Path $projectRoot $rel2
}

# 3) Eksikleri bul + alternatif arama
$missing = @()
$fixMap  = @{}   # oldRel -> newRel

# Cache: filename -> found paths (hız için)
$index = @{}

foreach ($m in $matches) {
  $raw = $m.Groups["p"].Value
  $rel = Normalize-RelPath $raw
  $abs = RelToAbs $rel

  if (Test-Path -LiteralPath $abs) { continue }

  # Eksik; aynı dosya adını assets\1_places altında ara
  $fileName = [System.IO.Path]::GetFileName($abs)

  if (-not $index.ContainsKey($fileName)) {
    $found = Get-ChildItem -LiteralPath (Join-Path $assetsRoot "1_places") -Recurse -File -Filter $fileName -ErrorAction SilentlyContinue |
             Select-Object -First 5
    $index[$fileName] = $found
  }

  $candidates = $index[$fileName]
  if ($candidates -and $candidates.Count -gt 0) {
    # İlk bulunanı seç (istersen burada “en iyi eşleşme” kuralı koyarız)
    $newAbs = $candidates[0].FullName

    # absolute -> rel (projectRoot'a göre)
    $newRel = $newAbs.Substring($projectRoot.Length).TrimStart("\") -replace "\\", "/"
    $newRel = "./" + $newRel

    $fixMap[$raw] = $newRel
  } else {
    $missing += [pscustomobject]@{
      Referenced = $raw
      Normalized = $rel
      ExpectedAbs = $abs
      FileName = $fileName
    }
  }
}

# 4) Rapor
"---- FIX ADAYLARI (bulundu) ----"
$fixMap.GetEnumerator() | Sort-Object Name | ForEach-Object {
  "{0}  ==>  {1}" -f $_.Key, $_.Value
}

""
"---- BULUNAMAYANLAR ----"
$missing | Format-Table -AutoSize

# 5) Otomatik düzeltme (yeni dosya üret)
# İstersen bu kısmı çalıştır.
$fixed = $content
foreach ($kv in $fixMap.GetEnumerator()) {
  # raw string'i olduğu gibi replace et (tırnaklar regex'le karışmasın diye Escape kullanıyoruz)
  $fixed = $fixed -replace [regex]::Escape($kv.Key), ($kv.Value)
}

$outFile = Join-Path $projectRoot "places-data.fixed.js"
Set-Content -LiteralPath $outFile -Value $fixed -Encoding UTF8

""
"Tamam: $outFile üretildi. Diff alıp kontrol edebilirsin."
