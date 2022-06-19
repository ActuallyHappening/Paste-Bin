import React from 'react'

const Panels = () => {
  return (
    <>
    <div className="panel" id="about">
				<div className="panel__content">
					<a href="/#" className="panel__close">
						<span className="material-icons">&#xe5cd;</span>
					</a>
					<p>Welcome to communityportal. This is the gateway to all your community engagement needs. Here. Yes, here.</p>
					<p>If you can't find it, tell us. We'll build it for you.</p>
					<p>Batteries included.</p>
				</div>
			</div>
			<div className="panel" id="contact">
				<div className="panel__content">
					<a href="/#" className="panel__close">
						<span className="material-icons">&#xe5cd;</span>
					</a>
					<p>For all enquiries, please reach out to David.</p>
					<p>
						<strong>David Sweeney</strong>
						<br/>
						<a href="mailto:David.Sweeney@aurecongroup.com>David.Sweeney@aurecongroup.com"></a>
						<br/>Director, Communication and Stakeholder Engagement, <br/>Aurecon
					</p>
				</div>
			</div>
    </>
  )
}

export default Panels