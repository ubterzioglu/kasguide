# ---------- SETTINGS ----------
$projectRoot    = "C:\Users\ubter\IdeaProjects\kasguide"
$placesRoot     = Join-Path $projectRoot "assets\1_places"
$placeholderSrc = Join-Path $projectRoot "assets\placeholder.jpg"   # placeholder burada olmalı

# Eğer placeholder başka yerdeyse yukarıyı değiştir:
# $placeholderSrc = Join-Path $projectRoot "assets\0_img\placeholder.jpg"

# ---------- SAFETY CHECKS ----------
if (-not (Test-Path -LiteralPath $placesRoot)) {
  throw "placesRoot bulunamadı: $placesRoot"
}
if (-not (Test-Path -LiteralPath $placeholderSrc)) {
  throw "placeholder bulunamadı: $placeholderSrc"
}

# ---------- HELPERS ----------
function To-Slug([string]$name) {
  $s = $name.ToLowerInvariant()

  # Türkçe karakterleri sadeleştir
  $s = $s -replace "ç","c" -replace "ğ","g" -replace "ı","i" -replace "İ","i" -replace "ö","o" -replace "ş","s" -replace "ü","u"

  # boşluk/altçizgi -> -
  $s = $s -replace "[\s_]+", "-"

  # sadece a-z 0-9 ve -
  $s = $s -replace "[^a-z0-9\-]", ""

  # tekrar eden - temizle
  $s = $s -replace "\-+", "-"
  $s = $s.Trim("-")

  if ([string]::IsNullOrWhiteSpace($s)) { $s = "place" }
  return $s
}

function Has-AnyImages([string]$dir) {
  $imgs = Get-ChildItem -LiteralPath $dir -File -ErrorAction SilentlyContinue |
          Where-Object { $_.Extension -match '^\.(jpg|jpeg|png|webp)$' }
  return ($imgs.Count -gt 0)
}

# ---------- MAIN ----------
$allDirs = Get-ChildItem -LiteralPath $placesRoot -Directory -Recurse

$createdCount = 0
$skippedCount = 0

foreach ($d in $allDirs) {
  # "Boş klasör" kriteri: klasörün içinde hiç resim yoksa
  if (Has-AnyImages $d.FullName) {
    $skippedCount++
    continue
  }

  $baseName = To-Slug $d.Name

  1..4 | ForEach-Object {
    $n = $_
    $targetName = "{0}-{1:000}.jpg" -f $baseName, $n
    $targetPath = Join-Path $d.FullName $targetName

    if (-not (Test-Path -LiteralPath $targetPath)) {
      Copy-Item -LiteralPath $placeholderSrc -Destination $targetPath
      $script:createdCount++
      Write-Host "OK: $($d.FullName)\$targetName"
    } else {
      Write-Host "SKIP (exists): $($d.FullName)\$targetName"
    }
  }
}

Write-Host ""
Write-Host "Bitti. Olusturulan dosya sayisi: $createdCount"
Write-Host "Resim iceren klasor (atlanmis): $skippedCount"
