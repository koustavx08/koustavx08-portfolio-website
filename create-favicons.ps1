Add-Type -AssemblyName System.Drawing

$bmp = New-Object System.Drawing.Bitmap 32, 32
$gfx = [System.Drawing.Graphics]::FromImage($bmp)
$gfx.SmoothingMode = 'AntiAlias'
$rect = New-Object System.Drawing.Rectangle 0, 0, 32, 32
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, '#0ea5e9', '#6366f1', 45
$gfx.FillRectangle($brush, $rect)
$font = New-Object System.Drawing.Font('Segoe UI', 14, [System.Drawing.FontStyle]::Bold)
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = 'Center'
$sf.LineAlignment = 'Center'
$gfx.DrawString('KS', $font, [System.Drawing.Brushes]::White, (New-Object System.Drawing.RectangleF(0,0,32,32)), $sf)
$bmp.Save('public/icon-light-32x32.png', [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save('public/icon-dark-32x32.png', [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$gfx.Dispose()

# 16x16
$bmp16 = New-Object System.Drawing.Bitmap 16, 16
$gfx16 = [System.Drawing.Graphics]::FromImage($bmp16)
$gfx16.SmoothingMode = 'AntiAlias'
$rect16 = New-Object System.Drawing.Rectangle 0, 0, 16, 16
$brush16 = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect16, '#0ea5e9', '#6366f1', 45
$gfx16.FillRectangle($brush16, $rect16)
$font16 = New-Object System.Drawing.Font('Segoe UI', 7, [System.Drawing.FontStyle]::Bold)
$gfx16.DrawString('KS', $font16, [System.Drawing.Brushes]::White, (New-Object System.Drawing.RectangleF(0,0,16,16)), $sf)
$bmp16.Save('public/favicon-16x16.png', [System.Drawing.Imaging.ImageFormat]::Png)
$bmp16.Dispose()
$gfx16.Dispose()

# 180x180 for apple touch icon
$bmp180 = New-Object System.Drawing.Bitmap 180, 180
$gfx180 = [System.Drawing.Graphics]::FromImage($bmp180)
$gfx180.SmoothingMode = 'AntiAlias'
$rect180 = New-Object System.Drawing.Rectangle 0, 0, 180, 180
$brush180 = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect180, '#0ea5e9', '#6366f1', 45
$gfx180.FillRectangle($brush180, $rect180)
$font180 = New-Object System.Drawing.Font('Segoe UI', 80, [System.Drawing.FontStyle]::Bold)
$gfx180.DrawString('KS', $font180, [System.Drawing.Brushes]::White, (New-Object System.Drawing.RectangleF(0,0,180,180)), $sf)
$bmp180.Save('public/apple-icon.png', [System.Drawing.Imaging.ImageFormat]::Png)
$bmp180.Dispose()
$gfx180.Dispose()

echo 'All favicons created successfully'