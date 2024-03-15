import Breadcrumb from 'react-bootstrap/Breadcrumb'

function BreadcrumbNews() {
  const breadcrumbStyle = {
    display: 'flex',
    alignItems: 'center',
  }

  const slashStyle = {
    margin: '0 5px',
    display: 'inline-block',
  }

  return (
    <div style={breadcrumbStyle}>
      <span>
        <Breadcrumb>
          <Breadcrumb.Item href="#">News</Breadcrumb.Item>
        </Breadcrumb>
      </span>
      <span style={slashStyle}>/</span>
      <span>
        <Breadcrumb>
          <Breadcrumb.Item active>Category</Breadcrumb.Item>
        </Breadcrumb>
      </span>
    </div>
  )
}

export default BreadcrumbNews
