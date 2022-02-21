import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'
import { Userdata } from '../../data'
import './home.css'

function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart title="User Analytics" data={Userdata} dataKey="Active Users" grid/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}

export default Home
