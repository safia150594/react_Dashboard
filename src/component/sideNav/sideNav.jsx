import './sideNav.css';
export default function Sidenav() {
    return (
        <div className='h-100'>
            <div className="bg-nav side-nav-w mb-0">
                <div className="side-nav-icon ">
                   <div>
                   <div>
                        <img className='side-nav-icon-img' src="/img/yogaicon.png" alt="yoga" />
                    </div>
                    <div>
                        <img className='side-nav-icon-img' src="/img/swim-icon.png" alt="swim" />
                    </div>
                    <div>
                        <img className='side-nav-icon-img' src="/img/cycle-icon.jpg" alt="cycle" />
                    </div>
                    <div>
                        <img className='side-nav-icon-img' src="/img/dumbbell-icon.jpg" alt="dumbbell" />
                    </div>
                   </div>
                    <div className='mt-5'>
                        <p className='text-secondary copyRights'>Copiryght, SportSee 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}