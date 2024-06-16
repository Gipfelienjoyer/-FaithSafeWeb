import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function DownloadTitle() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: {xs: 14, sm: 20},
                pb: {xs: 8, sm: 12},
            }}
        >
            <Stack spacing={2} useFlexGap sx={{width: {xs: '100%', sm: '70%'}}}>
                <Typography
                    variant="h2"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignSelf: 'center',
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Download now&nbsp;
                    <Typography variant="h2" color={'#9303EB'}>Faithsafe</Typography>
                </Typography>
                <Typography
                    textAlign="center"
                    color="text.secondary"
                    sx={{alignSelf: 'center', width: {sm: '100%', md: '80%'}}}
                >
                    Explore our cutting-edge Password-Manager, delivering high-quality solutions
                    tailored to your needs. Elevate your experience with top-tier features
                    and services.
                </Typography>
            </Stack>
        </Container>
    );
}
