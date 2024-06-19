import axios from "axios";

const REPO_API_URL = 'https://api.github.com/repos/BambusTM/FaithSafeFX/releases/latest';

export default class DownloadService {
    private async getLatestReleaseAssets(): Promise<any[]> {
        const response = await axios.get(REPO_API_URL);
        return response.data.assets;
    }

    async downloadFile(fileType: 'exe' | 'msi' | 'app'): Promise<void> {
        const assets = await this.getLatestReleaseAssets();
        const asset = assets.find(asset => asset.name.endsWith(`.${fileType}`));
        if (asset) {
            console.log(`Preparing to download ${fileType} from ${asset.browser_download_url}...`);
            window.location.href = asset.browser_download_url;
        } else {
            console.log(`No ${fileType} file found in the latest release.`);
            alert(`No ${fileType} file found in the latest release.`);
        }
    }
}
