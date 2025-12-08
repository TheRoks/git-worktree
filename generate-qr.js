import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const qrCodes = [
  {
    url: 'https://git-scm.com/docs/git-worktree',
    filename: 'qr-git-worktree.svg'
  },
  {
    url: 'https://code.visualstudio.com/blogs/2025/11/03/unified-agent-experience',
    filename: 'qr-vscode-blog.svg'
  },
  {
    url: 'https://github.com/TheRoks/git-worktree',
    filename: 'qr-presentation.svg'
  }
];

async function generateQRCodes() {
  const publicDir = path.join(__dirname, 'public');

  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const qr of qrCodes) {
    try {
      const svgString = await QRCode.toString(qr.url, {
        type: 'svg',
        width: 200,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });

      const filePath = path.join(publicDir, qr.filename);
      fs.writeFileSync(filePath, svgString);
      console.log(`✓ Generated ${qr.filename}`);
    } catch (err) {
      console.error(`✗ Failed to generate ${qr.filename}:`, err);
    }
  }

  console.log('\nAll QR codes generated successfully!');
}

generateQRCodes();
