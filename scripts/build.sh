# !/bin/sh

set -e

RELEASE_STORE_FILE=release.keystore
RELEASE_STORE_PASSWORD="${RELEASE_STORE_PASSWORD:-123456789}"
RELEASE_KEY_ALIAS="${RELEASE_KEY_ALIAS:-main}"
RELEASE_KEY_PASSWORD="${RELEASE_KEY_PASSWORD:-123456789}"

export RELEASE_STORE_FILE=$RELEASE_STORE_FILE
export RELEASE_STORE_PASSWORD=$RELEASE_STORE_PASSWORD
export RELEASE_KEY_ALIAS=$RELEASE_KEY_ALIAS
export RELEASE_KEY_PASSWORD=$RELEASE_KEY_PASSWORD

keytool -genkeypair \
  -dname 'cn=Unknown' \
  -alias $RELEASE_KEY_ALIAS \
  -keyalg RSA \
  -keysize 4096 \
  -keypass $RELEASE_KEY_PASSWORD \
  -keystore  android/app/$RELEASE_STORE_FILE \
  -storepass $RELEASE_STORE_PASSWORD \
  -validity 365

cd android
./gradlew assembleRelease && cd ..

rm android/app/$RELEASE_STORE_FILE