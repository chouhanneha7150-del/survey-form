loginUser("neha", "password", function(err, user) {
  getUserProfile(user.id, function(err, profile) {
    getUserOrders(profile.id, function(err, orders) {
      sendEmail(user.email, orders, function(err) {
        ...
      });
    });
  });
});
