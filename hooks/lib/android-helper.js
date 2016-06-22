
var fs = require("fs");
var path = require("path");
var utilities = require("./utilities");

module.exports = {

    addFabricBuildToolsGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle += 
"\n// Fabric Cordova Plugin - Start Fabric Build Tools\n\
buildscript {\n\
    repositories {\n\
        maven { url 'https://maven.fabric.io/public' }\n\
    }\n\
\n\
    dependencies {\n\
        classpath 'io.fabric.tools:gradle:1.+'\n\
    }\n\
}\n\
\n\
apply plugin: 'io.fabric'\n\
\n\
repositories {\n\
    maven { url 'https://maven.fabric.io/public' }\n\
}\n\
\n\
dependencies {\n\
    compile('com.crashlytics.sdk.android:crashlytics:2.5.7@aar') {\n\
        transitive = true;\n\
    }\n\
    compile('com.crashlytics.sdk.android:crashlytics-ndk:1.1.3@aar') {\n\
        transitive = true;\n\
    }\n\
}\n\
\n\
crashlytics {\n\
    enableNdk true\n\
    androidNdkOut 'src/main/obj'\n\
    androidNdkLibsOut 'src/main/libs'\n\
}\n\
// Fabric Cordova Plugin - End Fabric Build Tools\n";

        utilities.writeBuildGradle(buildGradle);
    },

    removeFabricBuildToolsFromGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle = buildGradle.replace(/\n\/\/ Fabric Cordova Plugin - Start Fabric Build Tools[\s\S]*\/\/ Fabric Cordova Plugin - End Fabric Build Tools\n/, "");

        utilities.writeBuildGradle(buildGradle);
    }
};
