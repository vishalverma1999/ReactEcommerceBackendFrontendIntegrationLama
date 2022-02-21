import './widgetLarge.css'

function WidgetLarge() {

    // Button Component
    const Button = ({ type }) => {

        return (<button className={"widgetLargeButton " + type}>{type}</button>)
    }

    return (
        <div className='widgetLarge'>
            <h3 className="widgetLargeTitle">Latest Transactions</h3>
            {/* <table>	Defines a table */}
            <table className="widgetLargeTable">
                {/* <tr> Defines a row in a table */}
                <tr className="widgetLargeTr">
                    {/* <th> Defines a header cell in a table */}
                    <th className="widgetLargeTh">Customer</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Amount</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                <tr className="widgetLargeTr">
                    {/* Each table cell is defined by a <td> and a </td> tag. td stands for table data. Everything between <td> and </td> are the content of the table cell. */}
                    <td className="widgetLargeUser">
                        <img src="https://cdn.wallpapersafari.com/60/61/MC2JnB.jpg" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">Susan Carol</span>
                    </td>
                    <td className="widgetLargeDate">2 july 2021</td>
                    <td className="widgetLargeAmount">100Rs</td>
                    <td className="widgetLargeStatus">
                        {/* instead of making three different buttons for approved, declined and pending we will make a small component of name Button it's going to be our new component and in Button component i'm going to take prop, it's going to be type and type can be approved, declined or pending and then i will say return with a button tag and it's classname will be the prop type that we passed */}
                        <Button type={"Approved"} />
                    </td>
                </tr>

                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://cdn.wallpapersafari.com/60/61/MC2JnB.jpg" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">Susan Carol</span>
                    </td>
                    <td className="widgetLargeDate">2 july 2021</td>
                    <td className="widgetLargeAmount">100Rs</td>
                    <td className="widgetLargeStatus">
                        {/* instead of making three different buttons for approved, declined and pending we will make a small component of name Button it's going to be our new component and in Button component i'm going to take prop, it's going to be type and type can be approved, declined or pending and then i will say return with a button tag and it's classname will be the prop type that we passed */}
                        <Button type={"Pending"} />
                    </td>
                </tr>

                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://cdn.wallpapersafari.com/60/61/MC2JnB.jpg" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">Susan Carol</span>
                    </td>
                    <td className="widgetLargeDate">2 july 2021</td>
                    <td className="widgetLargeAmount">100Rs</td>
                    <td className="widgetLargeStatus">
                        {/* instead of making three different buttons for approved, declined and pending we will make a small component of name Button it's going to be our new component and in Button component i'm going to take prop, it's going to be type and type can be approved, declined or pending and then i will say return with a button tag and it's classname will be the prop type that we passed */}
                        <Button type={"Approved"} />
                    </td>
                </tr>

                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://cdn.wallpapersafari.com/60/61/MC2JnB.jpg" alt="" className="widgetLargeImg" />
                        <span className="widgetLargeName">Susan Carol</span>
                    </td>
                    <td className="widgetLargeDate">2 july 2021</td>
                    <td className="widgetLargeAmount">100Rs</td>
                    <td className="widgetLargeStatus">
                        {/* instead of making three different buttons for approved, declined and pending we will make a small component of name Button it's going to be our new component and in Button component i'm going to take prop, it's going to be type and type can be approved, declined or pending and then i will say return with a button tag and it's classname will be the prop type that we passed */}
                        <Button type={"Declined"} />
                    </td>
                </tr>

            </table>
        </div>
    )
}

export default WidgetLarge


/*


 */
