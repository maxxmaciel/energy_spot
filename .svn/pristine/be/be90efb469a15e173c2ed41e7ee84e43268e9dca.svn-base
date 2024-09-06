const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const buildDirs = ['reidomate', 'osklen'];

buildDirs.forEach(buildDir => {
    
  exec('react-scripts build', (err, stdout, stderr) => {
    if (err) {
      console.error(`Erro ao construir o projeto para ${buildDir}:`, stderr);
      return;
    }

    const buildPath = path.join(__dirname, 'build');
    const newBuildPath = path.join(__dirname, buildDir);

    fs.rename(buildPath, newBuildPath, (err) => {
      if (err) {
        console.error(`Erro ao renomear a pasta para ${buildDir}:`, err);
        return;
      }
      console.log(`Pasta de build renomeada para ${buildDir}`);
    });
  });
});