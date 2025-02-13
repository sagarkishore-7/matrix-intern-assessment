const fs = require('fs');
const { PDFDocument, StandardFonts } = require('pdf-lib');

const tasks = JSON.parse(fs.readFileSync('tasks.json')).tasks;
const coverage = JSON.parse(fs.readFileSync('coverage.json')); // Jest coverage output

async function generateReport() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  let y = 750;
  tasks.forEach((task, index) => {
    const taskCoverage = coverage[task];
    page.drawText(`${index + 1}. ${task}`, { x: 50, y, font, size: 12 });
    page.drawText(`Status: ${taskCoverage.passed ? 'Passed ✅' : 'Failed ❌'}`, { x: 50, y: y - 20, font, size: 12 });
    page.drawText(`Coverage: ${taskCoverage.lines.pct}%`, { x: 50, y: y - 40, font, size: 12 });
    y -= 80;
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('report.pdf', pdfBytes);
}

generateReport();