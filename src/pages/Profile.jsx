function Profile({ user }) {
  return (
    <main>
      <section className="w-full bg-[#78BFEA] min-h-[400px]">
        <div>
          <h2>User Information</h2>
          <span>{user.firstName}</span>
          <br />
          <span>{user.lastName}</span>
          <br />
          <span>{user.email}</span>
          <br />
        </div>
      </section>
      <section className="w-full bg-[#78BFEB] min-h-[400px]">
        <form action="">
          <input type="password" placeholder="New Password" />
          <br />
          <input type="password" placeholder="Confirm new Password" />
          <br />
          <input type="submit" value="Save Password" />
          <br />
        </form>
      </section>
    </main>
  );
}

export default Profile;
