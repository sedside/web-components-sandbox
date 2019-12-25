const fs = require('fs');
const path = require('path');

const STYLES_DIR_PATH = path.resolve(__dirname, 'src', 'styles');
const STYLE_LIB_PATH = path.resolve(__dirname, 'node_modules', '@eastbanctechru/s7-ui-kit/sass');
const COMPONENTS_PATH = path.resolve(__dirname, 'src', 'components');
const FILE_LIST_NAME = 'style-files-to-copy';
const COPIED_FILES_FOLDER_NAME = 's7-ui-kit-copied-styles';
const COMMON_STYLE_FILES = ['_mixins.scss', '_variables.scss', 'typography.scss'];
const IMPORT_REGEXP = /@import(.+);/g;

function removeImports(file) {
    const matches = file.match(IMPORT_REGEXP);

    if (!matches) {
        return file;
    }

    let newFile = file;

    matches.forEach(match => newFile = newFile.replace(match, ''));

    return newFile;
}

function copyFile(sourcePath, targetPath, fileName) {
    const copy = (path1, path2) => fs.copyFileSync(
        path.resolve(path1, fileName),
        path.resolve(path2, fileName)
    );
    const write = (content, target) => fs.writeFileSync(
        path.resolve(target, fileName),
        content,
        { encoding: 'utf-8' }
    );

    const styleFileFromLib = fs.readFileSync(path.resolve(sourcePath, fileName)).toString('utf-8');
    const hasImports = IMPORT_REGEXP.test(styleFileFromLib);
    let fileWithNoImports = '';

    if (hasImports) {
        fileWithNoImports = removeImports(styleFileFromLib);
    }

    try {
        const styleFile = fs.readFileSync(path.resolve(targetPath, fileName)).toString('utf-8');

        if (!hasImports && styleFile !== styleFileFromLib) {
            copy(sourcePath, targetPath);
        } else if (hasImports && styleFile !== fileWithNoImports) {
            write(fileWithNoImports, targetPath);
        }
    } catch (error) {
        if (hasImports) {
            write(fileWithNoImports, targetPath);
        } else {
            copy(sourcePath, targetPath);
        }
    }
}

try {
    fs.readdirSync(STYLES_DIR_PATH);
} catch (error) {
    fs.mkdirSync(STYLES_DIR_PATH);
}

COMMON_STYLE_FILES.forEach(filePath => copyFile(STYLE_LIB_PATH, STYLES_DIR_PATH, filePath));

const components = fs.readdirSync(COMPONENTS_PATH);
components.forEach(component => {
    try {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const filesToCopy = require(path.resolve(COMPONENTS_PATH, component, FILE_LIST_NAME));
        const folderNameToCopy = path.resolve(COMPONENTS_PATH, component, COPIED_FILES_FOLDER_NAME);

        try {
            fs.readdirSync(folderNameToCopy);
        } catch (error) {
            fs.mkdirSync(folderNameToCopy);
        }

        filesToCopy.forEach(fileName => copyFile(STYLE_LIB_PATH, folderNameToCopy, fileName));
    } catch (error) {
        console.log(error);
    }
});
