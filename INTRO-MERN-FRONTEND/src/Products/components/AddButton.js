import React from 'react'
import { Container, Button } from 'react-bulma-components'


const AddButton = () => {
    return (
        <section>
            <Container>
                <div className="is-pulled-right">
                    <Button color= "primary">Add</Button>
                </div>
            </Container>
        </section>
    )
}

export default AddButton