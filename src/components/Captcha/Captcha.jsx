import Dialog from '@mui/material/Dialog';
import ReCAPTCHA from 'react-google-recaptcha';

// You MUST close dialog in onVerified function
const Captcha = ({ open, onVerified }) => {
    return (
        <Dialog open={open}>
            <ReCAPTCHA size="compact" sitekey="6Lc6fCMnAAAAAJDFAZxx98ZFiEUXENtCdiacVb2L" onChange={onVerified} />
        </Dialog>
    );
};

export default Captcha;
