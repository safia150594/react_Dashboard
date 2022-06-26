import './scores.css';
export default function Score({img,kcal, catogery}) {
    return (
        <div className='my-3'>
            <div className='bg-score p-3'>
                <div className='d-flex justify-content-around align-item-center'>
                    <img className='graph-icon' src={img} alt="icon-fire" />
                    <div >
                        <h5>{kcal}</h5>
                        <p className='text-score'>{catogery}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}