import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Admissao () {
    return (
        <>
          <InputGroup className="mb-3">
        <Form.Control
          placeholder="Nome completo"
          aria-label="Nome"
          aria-describedby="basic-addon1"
        />
      </InputGroup> 

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup> 

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup> 

      <InputGroup className="mb-3">
      <InputGroup.Text>Cpf</InputGroup.Text>
      <Form.Control aria-label="First name" />
      <InputGroup.Text>Rg</InputGroup.Text>
      <Form.Control aria-label="Last name" />

    </InputGroup>
        </>
    );
}
