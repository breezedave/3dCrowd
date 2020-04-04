for %%a in ("*.jpg") do (
    ffmpeg -i "%%a" -vf scale=1024:-1 .\converted\\images%%~na.png
)

for %%a in ("*.png") do (
    ffmpeg -i "%%a" -vf scale=1024:-1 .\converted\images\%%~na.png
)

for %%a in ("*.mp4") do (
    ffmpeg -i "%%a" -codec:a libmp3lame -c:v libx264 -vf scale=-1:720 .\video\%%~na.mp4
    ffmpeg -i "%%a" -vf "select=eq(n\,50), scale=1024:-1" -vframes 1 .\images\%%~na.png
)

for %%a in ("*.mov") do (
    ffmpeg -i "%%a" -codec:a libmp3lame -c:v libx264 -vf scale=-1:720 .\video\%%~na.mp4
    ffmpeg -i "%%a" -vf "select=eq(n\,50), scale=1024:-1" -vframes 1 .\images\%%~na.png
)

for %%a in ("*.mpg") do (
    ffmpeg -i "%%a" -codec:a libmp3lame -c:v libx264 -vf scale=-1:720 .\video\%%~na.mp4
    ffmpeg -i "%%a" -vf "select=eq(n\,50), scale=1024:-1" -vframes 1 .\images\%%~na.png
)
