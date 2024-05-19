import bcrypt from "bcrypt";

export class PasswordManager {
  private static saltRounds = 10;

  // Hash a password
  public static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  // Compare a password with its hash
  public static async comparePassword(
    password: string,
    hash: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}

// Usage example
// const plainPassword = "password123";
// const hashedPassword = await PasswordManager.hashPassword(plainPassword);
// const isMatch = await PasswordManager.comparePassword(plainPassword, hashedPassword);
// console.log("Password match:", isMatch);
