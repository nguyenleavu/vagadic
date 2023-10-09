import DashboardLayout from '@/layouts/DashboardLayout';
import Banner from './Banner';
import BestSeller from './BestSeller';
import HotDeal from './HotDeal';
import Instagram from './Instagram';

const Home = () => {
    return (
        <DashboardLayout title='HOME PAGE'>
            <Banner />
            <BestSeller />
            <HotDeal />
            <Instagram />
        </DashboardLayout>
    );
};

export default Home;
