import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input } from './common';
import { emailChanged, passwordChanged } from '../store/actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        label="Email"
                        placeholder="email@gmail.com"
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        onChangeText={this.onPasswordChange.bind(this)}
                        isPassword
                        label="Password"
                        placeholder="password"
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
