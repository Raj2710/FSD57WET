import React from 'react'

function Card({data}) {
  return <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.userEnabler?"":"text-muted"}><span className="fa-li"><i className={data.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="PLUS" || data.plan==="PRO"?<strong>{data.user}</strong>:data.user}</li>
              <li className={data.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={data.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.publicProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={data.publicProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.publicProjects}</li>
              <li className={data.communityAccessEnabler?"":"text-muted"}><span className="fa-li"><i className={data.communityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.communityAccess}</li>
              <li className={data.privateProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={data.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.privateProjects}</li>
              <li className={data.supportEnabler?"":"text-muted"}><span className="fa-li"><i className={data.supportEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
              <li className={data.subDomainEnabler?"":"text-muted"}><span className="fa-li"><i className={data.subDomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="PRO"?<strong>Unlimited </strong>:<></>}{data.subDomain}</li>
              <li className={data.reportsEnabler?"":"text-muted"}><span className="fa-li"><i className={data.reportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Card