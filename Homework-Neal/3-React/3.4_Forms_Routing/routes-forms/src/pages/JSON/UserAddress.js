const UserAddress = (address) => {
  const userAddress = address.street + " " + address.suite + " " + address.city;
  return (
    <div>
      <h3>{userAddress}</h3>
    </div>
  );
};

export default UserAddress;
