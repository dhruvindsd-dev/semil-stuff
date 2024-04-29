import Breadcrumb from "react-bootstrap/Breadcrumb"
import "../cssprops/breadcrumb.css" // Importing the CSS file for custom styles

function BreadCrumb() {
	return (
		<Breadcrumb className="custom-breadcrumb">
			<Breadcrumb.Item  className="breadcrumb-item">
				STUDENT ZONE
			</Breadcrumb.Item>
			<Breadcrumb.Item  className="breadcrumb-item">
				DASHBOARD
			</Breadcrumb.Item>
		</Breadcrumb>
	)
}

export default BreadCrumb
