import axios from "axios";

const API_URL = 'https://api.faithsafe.net';

export default class DownloadService {
    async downloadFile(token: string, fileType: 'exe' | 'msi' | 'app'): Promise<void> {
        const response = await axios.get(`${API_URL}/download/${fileType}`, {
            responseType: 'blob',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const blob = new Blob([response.data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `FaithSafe.${fileType}`);
        document.body.appendChild(link);
        link.click();

        if (link.parentNode) {
            link.parentNode.removeChild(link);
        }
        window.URL.revokeObjectURL(url);
    }
}
