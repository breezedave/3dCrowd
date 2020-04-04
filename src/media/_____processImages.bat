for %%a in ("*.jpg") do (
    ffmpeg -i "%%a" -vf scale=700:-1 .\images\%%~na.png
    ffmpeg -i "%%a" -vf scale=200:-1 .\images\%%~na.jpg
)

for %%a in ("*.png") do (
    ffmpeg -i "%%a" -vf scale=700:-1 .\images\%%~na.png
    ffmpeg -i "%%a" -vf scale=200:-1 .\images\%%~na.jpg
)

for %%a in ("*.mp4") do (
    ffmpeg -i "%%a" -codec:a libmp3lame -c:v libx264 -vf scale=-1:484 .\video\%%~na.mp4
    ffmpeg -i "%%a" -vf "select=eq(n\,50), scale=700:-1" -vframes 1 .\images\%%~na.png
    ffmpeg -i "%%a" -vf "select=eq(n\,50), scale=200:-1" -vframes 1 .\images\%%~na.jpg
)

for %%a in ("*.mov") do (
    ffmpeg -i "%%a" -codec:a libmp3lame -c:v libx264 -vf scale=-1:484 .\video\%%~na.mp4
    ffmpeg -i "%%a" -vf "select=eq(n\,50), scale=700:-1" -vframes 1 .\images\%%~na.png
    ffmpeg -i "%%a" -vf "select=eq(n\,50), scale=200:-1" -vframes 1 .\images\%%~na.jpg
)

for %%a in ("*.mpg") do (
    ffmpeg -i "%%a" -codec:a libmp3lame -c:v libx264 -vf scale=-1:484 .\video\%%~na.mp4
    ffmpeg -i "%%a" -vf "select=eq(n\,50), scale=700:-1" -vframes 1 .\images\%%~na.png
    ffmpeg -i "%%a" -vf "select=eq(n\,50), scale=200:-1" -vframes 1 .\images\%%~na.jpg
)
