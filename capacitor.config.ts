import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.0a7f4b6ecece43fda951172a74bb700f',
  appName: 'mio-aiuto-per-te',
  webDir: 'dist',
  server: {
    url: 'https://0a7f4b6e-cece-43fd-a951-172a74bb700f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FFF7F0',
      showSpinner: false
    }
  }
};

export default config;