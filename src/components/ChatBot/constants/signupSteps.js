import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      course: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, email, course } = steps;

    this.setState({ name, email, course });
  }

  render() {
    const { name, email, course } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{email.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{course.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What is your email?',
            trigger: 'email',
          },
           {
            id:'email', 
            user: true, 
            validator: (value) => {
               if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
                 {
                   return true;
                 }
               else
                 {
                   return'Please enter a valid email.';
                 }
            },
            trigger: '4',

        },
        {
            id: '4',
            message: 'What course are you enrolled in?',
            trigger: 'course',
          },
          {
            id: 'course',
            options: [
              { value: 'ma544', label: 'Data Mining', trigger: '5' },
              { value: 'ma540', label: 'Data Vis', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: "And what is your group's name?",
            trigger: 'group-name',
          },
          {
            id: 'group-name',
            user: true,
            trigger: '7',
          },
        //   {
        //     id: '5',
        //     message: 'How old are you?',
        //     trigger: 'age',
        //   },
        //   {
        //     id: 'age',
        //     user: true,
        //     trigger: '7',
        //     validator: (value) => {
        //       if (isNaN(value)) {
        //         return 'value must be a number';
        //       } else if (value < 0) {
        //         return 'value must be positive';
        //       } else if (value > 120) {
        //         return `${value}? Come on!`;
        //       }

        //       return true;
        //     },
        //   },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;