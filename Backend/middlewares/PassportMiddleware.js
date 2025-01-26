const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:7000/auth/google/callback",
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				let user = await prisma.user.findUnique({
					where: {
						Google_id: profile.id,
					},
				});
				if (!user) {
					user = await prisma.user.create({
						data: {
							Google_id: profile.id,
							name: profile.displayName,
							email: profile.emails[0].value,
							profileCover: profile.photos[0].value,
						},
					});
				}
				return done(null, user);
			} catch (error) {
				return done(error, null);
			}
		},
	),
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
