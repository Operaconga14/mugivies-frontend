// ✅ request-scoped
// const token = (await cookies()).get("access_token")?.value;
// if (!token) return null;
// try {
// const { payload } = await jwtVerify(token, secret);
// const { id } = payload as JwtPayload;
// ✅ request-scoped DB access
// const db = await AppDataSource();
// const userrepo = db.getRepository(User);
// return userrepo.findOneBy({ id: Number(id) });
// } catch {
// return null;
// }
//
