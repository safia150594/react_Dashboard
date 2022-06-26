import './home.css';
import Barchart from '../../component/recharts/barchart/barcharts';
import Score from '../../component/scores/score';
import Linechart from '../../component/recharts/linechart/linechart';
import Radarchart from '../../component/recharts/raderchart/Radarchart';
import Scorechart from '../../component/recharts/scorechart/scorechart';
import { useState, useEffect } from 'react';
import { apiServices } from '../../service/apiService';
import { useParams } from 'react-router-dom';
// import fireIcon from '/img/calories-icon.png';
export default function Home() {
    const { id } = useParams();
    const [userObj, setUsers] = useState({});
    const [scoreChartData, setscoreChartData] = useState([]);
    const [userPerformanceObj, setPerformanceUsers] = useState(
        []
    );
    const [activityChartData, setactivityChartData] = useState(
        []);
    const [sessionChartData, setSessionChartData] = useState(
        []
    );
    // let data = [];
    const getUsers = () => {
        apiServices.getUserById(id).then((res) => {
            let data = [
                { name: "Score", value: res?.data?.score },
                { name: "Total", value: 1 }]
            setscoreChartData(data);
            setUsers(res);
        })
    }
    const getActivityBarChart = () => {
        apiServices.getUserByIdAndType(id, "activity").then((res) => {
            setactivityChartData(res.data.sessions);
        })
    }
    const getPerformanceRader = () => {
        apiServices.getUserByIdAndType(id, "performance").then((res) => {
           res.data.data.map(obj => {
                obj.kind = res.data.kind[obj.kind];                
            });
            setPerformanceUsers(res.data.data);
        })
    }
    const getSessionsChart = () => {
        apiServices.getUserByIdAndType(id, "average-sessions").then((res) => {
            setSessionChartData(res.data.sessions);
        })
    }
    useEffect(() => {
        getUsers();
        getActivityBarChart();
        getPerformanceRader();
        getSessionsChart();
    }, [id]);
    console.log(userPerformanceObj);
    return (
        <div className="container side-nav-home">
            <div className='player-name'>
                <div className='py-5'>
                    {/* <h1 className='py-2'>Bonjour <span className='text-primary'>{this.userObj?.data}</span></h1> */}
                    <h1 className='py-2'>Bonjour <span className='text-primary'>{userObj?.data?.userInfos?.firstName}</span></h1>
                     <p className='fs-5'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
            </div>
            <div>
                <div className="row g-5">
                    <div className="col-9">
                        <div className='bg-graph'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span className="chart-heading-size">Activité quotidienne</span>
                                <div>
                                    <span className='pe-4 chart-axis-size '><span className="dotR"></span> Poids (kg)</span>
                                    <span className='pe-4 chart-axis-size '><span className="dotB "></span>  Calories brûlées (kCal)</span>
                                </div>
                            </div>
                            <div className='pt-5'>
                                <Barchart data={activityChartData} xAxisLabelName="day" value1Name="kilogram" value2Name="calories" />
                            </div>
                        </div>
                        <div className='my-3'>
                            <div className="row">
                                <div className="col-4">
                                    <div className='line-chart line-graph h-100'>
                                        <Linechart data={sessionChartData} valueName="sessionLength" xAxisLabelName="day"/>
                                        <div className='line-graph-heading ps-2'>
                                            Durée moyenne <br />des sessions
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='radar-graph w-100 h-100'>
                                        <Radarchart data={userPerformanceObj} innerStrokeKey="value" labelkey="kind" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="progrss-graph">
                                        {!!scoreChartData?.length && (
                                            <Scorechart data={scoreChartData} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 '>
                        <div>
                            <Score img={'/img/calories-icon.png'} kcal={userObj?.data?.keyData?.calorieCount} catogery={"calories"} />
                            <Score img={'/img/protein-icon.png'} kcal={userObj?.data?.keyData?.proteinCount} catogery={" proteins"} />
                            <Score img={'/img/carbs-icon.png'} kcal={userObj?.data?.keyData?.carbohydrateCount} catogery={"Glucides"} />
                            <Score img={'/img/fat-icon.png'} kcal={userObj?.data?.keyData?.lipidCount} catogery={"Lipides"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
