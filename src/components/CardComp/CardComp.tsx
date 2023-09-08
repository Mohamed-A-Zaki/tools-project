import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { CardProps } from "../../types/types.type";

export default function CardComp({ title, data }: CardProps) {
  return (
    <MDBCard className="text-bg-dark h-100">
      <MDBCardBody>
        <MDBCardTitle className="mb-3 fs-4">{title}</MDBCardTitle>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
          {data.map(({ id, img, title, to }) => {
            return (
              <div key={id} className="col text-center">
                <Link to={to} target="_blank">
                  <img className="item-img img-thumbnail p-0" src={img} />
                  <h5 className="mt-2 text-light">{title}</h5>
                </Link>
              </div>
            );
          })}
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
