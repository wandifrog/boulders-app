function create_directory_if_not_exists() {
  local directory_path=$1

  if [[ ! -d $directory_path ]]; then
    mkdir -p $directory_path
  fi
}

(
  cd android
  create_directory_if_not_exists ../build
  rm ../build/app-release.apk
  ./gradlew bundleRelease
  bundletool build-apks --bundle app/build/outputs/bundle/release/app-release.aab --output app-release.apks --mode=universal
  mv app-release.apks app-release.zip
  unzip app-release.zip
  mv universal.apk ../build/app-release.apk
  mv app/build/outputs/bundle/release/app-release.aab ../build/app-release.aab # optional
  rm -rf toc.pb app-release.zip app-release
  echo "🙈🐵🙈🐵🙈🐵🙈 - Success build - 🐵🙈🐵🙈🐵🙈🐵"
)
