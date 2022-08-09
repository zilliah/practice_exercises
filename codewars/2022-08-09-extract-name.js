class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      let name = dirtyFileName.slice(dirtyFileName.indexOf("_") + 1, dirtyFileName.indexOf("."));
      let ext = dirtyFileName.slice(dirtyFileName.indexOf("."), dirtyFileName.lastIndexOf("."));
      return name + ext;
    }
}