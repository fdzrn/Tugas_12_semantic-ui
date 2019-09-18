import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import {Grid,Container,Header,Image,Form,Message,Button,Segment} from 'semantic-ui-react';
class App extends Component {
  render(){
    return(
      <div>
        <br /> <br />   <br /> <br />
       <Container textAlign='center'>
         <Header as="h3" color='teal'>
           <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />
            Member login
         </Header>
       </Container>
          <br />
        <Grid container columns={3}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          <Segment>
            <Form success>
               <Form.Input type='text' placeholder='Emailaddres' icon='user '  iconPosition='left' />
               <Form.Input  type='password' placeholder='password' icon='lock '  iconPosition='left'/>
               <Form.Checkbox  label='I agree to the Terms and Conditions' />
               <Button fluid color='teal'>login</Button>
             </Form>
          </Segment>
          <Container textAlign='center'>
            <Message centered>
              Tidak Punya Akun ? Silahkan<a href="https://niomic.com/login"> Register</a>.
            </Message>
          </Container>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default App;