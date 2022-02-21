import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';   // https://recharts.org/en-US/examples/SimpleLineChart

function Chart({ title, data, dataKey, grid }) {

    // data copy pasted from recharts.org> example > simpleLineChart , link https://recharts.org/en-US/examples


    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>
            {/* we are creating responsive container that because even if we shrink or expand our page it's gonna be responsive */}
            {/*i can indicate any height for example 300 pixels 400 pixels but you can do one more thing here writing here aspect and it's going to be 4/1 so that means basically if the width four units the height will be one unit so if it's 400 pixels it's gonna be a hundred pixels*/}
            <ResponsiveContainer width={"100%"} aspect={4 / 1} >
                {/* we will not provide any height and width to linechart since already provided in responsive container */}
                {/* inside this line chart i will indicate my data and it's going to be the data array that we definedabove*/}
                <LineChart data={data}>
                    {/* so if i save and look at here we can't see anything because we didn't indicate our lines x axis or y axis anything so let's create them */}
                    {/* firstly i'm going to create my x-axis and here its name(that will display on x axis) will be the name key inside our data so i will say data key it's going to be name so you can give anything inside this data for example in our project it's gonna be our months october november december
 */}
                    {/* stroke- color of these names */}
                    <XAxis dataKey="name" stroke='#5550bd' />
                    {/* Line is basically the thing that is to be plotted, so it's dataKey are the points of data to be drawn */}
                    <Line type={"monotone"} dataKey={dataKey} stroke='#5550bd' />
                    {/* Use Tooltip- when i hover as you can see i can see my active users */}
                    <Tooltip />
                    {/* strokeDasharray- will represent cartedianPlane in dashed lines */}
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray={"5 5"} />}
                    {/* if grid then run CartesianGrid else not */}
                    {/* Legend shows us which property we are using here it's our Active User but we are using tooltip here so we don't need this we can delete */}
                    {/* <Legend className='legend' /> */}
                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}

export default Chart





/*
i will not give any width and height
47:56
because i indicated here

inside this line chart i will indicate my data and it's going to be the data array that we defined above



48:55
anything it's gonna be our months f



 
 */