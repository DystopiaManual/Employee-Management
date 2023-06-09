const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/employees', (req,res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '930924',
            'gender': '남자',
            'job': '개발자',
            'position': '대리',
            'joinDate': '20220303'
          },
    ])
})


app.listen(port, () => console.log(`Listening on port ${port}`));