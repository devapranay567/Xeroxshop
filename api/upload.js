const multer = require('multer');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads'); // Save files in 'public/uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Name file with timestamp
    }
});

const upload = multer({ storage: storage });

export const config = {
    api: {
        bodyParser: false,  // Disable bodyParser since Multer will handle the body
    },
};

// Handle the file upload request
export default async (req, res) => {
    if (req.method === 'POST') {
        upload.single('file')(req, res, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            return res.status(200).json({ message: 'File uploaded successfully' });
        });
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
};
