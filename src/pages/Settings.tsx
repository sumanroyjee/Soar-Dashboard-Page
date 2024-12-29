import { Header } from '../components/layout/Header';
import { SettingsTabs } from '../components/settings/SettingsTabs';
import { ProfileForm } from '../components/settings/ProfileForm';

export function Settings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 md:p-8 md:ml-64">
        <Header />
        <div className="bg-white rounded-xl p-4 md:p-8 mt-4">
          <SettingsTabs />
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}