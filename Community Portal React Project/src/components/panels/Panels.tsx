import Panel, { CloseButton } from "./Panel"

// TODO refactor this into a dynamic set
const Panels = () => {
  return (
    <div className="panels">
      <Panel name="about">
					<p>Welcome to communityportal. This is the gateway to all your community engagement needs. Here. Yes, here.</p>
					<p>If you can't find it, tell us. We'll build it for you.</p>
					<p>Batteries included.</p>
			</Panel>
			<Panel name="contact">
					<p>For all enquiries, please reach out to David.</p>
					<p>
						<a href="mailto:David.Sweeney@aurecongroup.com>David.Sweeney@aurecongroup.com">
						  <strong>David.Sweeney@aurecongroup.com</strong>
            </a>
						<br/>
						<br/>Director, Communication and Stakeholder Engagement, <br/>
            Aurecon
					</p>
			</Panel>
    </div>
  )
}

export default Panels