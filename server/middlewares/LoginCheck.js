const loginCheck = (req, res, next) => {
    if (req.session.code) {
        return next();
    } else {
      res.send('<script>alert("로그인이 필요합니다.");\
        window.location.href="/";\
      </script>');
    }
}

export default loginCheck;