import { PieChart, Pie, Sector, Cell, Label, ResponsiveContainer, Legend, Line } from "recharts";
import './scorechart.css'

export default function Scorechart({ data }) {
    // console.log(data);

    return (

        <div style={{ width: "100%", height: 300 }}>
            {!!data.length  && (
                <ResponsiveContainer>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            // cx="50%"
                            // cy="50%"
                            dataKey="value" // make sure to map the dataKey to "value"
                            innerRadius={85} // the inner and outer radius helps to create the progress look
                            outerRadius={100}
                            startAngle={90}
                            endAngle={460}
                        >
                            {data.map((entry, index) => {
                                if (index === 1) {
                                    return <Cell key={`cell-${index}`} fill="#f3f6f9" />; // make sure to map the index to the colour you want
                                }
                                return <Cell key={`cell-${index}`} fill="green" />;
                            })}
                            {/* <Label x={10} y={100} dy={8} fill={"red"}>
                    hihihi
                </Label> */}
                            <Legend verticalAlign="top" height={36} />
 
                            <Label className="circle-label" fill={"black"} width={99} position="center">
                                {(data[0].value / data[1].value) * 100} % de votre objectif
                            </Label>
                            {/* <Label width={30} 
                    value={data[0].value +'asdasdas' }
                    position="center"
                    fill="grey"
                    style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        fontFamily: "Roboto"
                    }}
                />  */}

                            {/* <Label width={30} position="center" >
                    <text fill="#3d405c" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
                        <tspan alignmentBaseline="middle" fontSize="26">hihii</tspan>
                        <tspan fontSize="14">bkhkh</tspan>
                    </text>
                </Label> */}

                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            )}
        </div>
    )
}