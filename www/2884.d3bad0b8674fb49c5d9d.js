(self.webpackChunkcook_fusion=self.webpackChunkcook_fusion||[]).push([[2884],{2884:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FirebaseAuthenticationWeb:()=>a});var s=n(8107),r=n(4903);class a extends s.Uw{constructor(){super(),(0,r.v0)().onAuthStateChanged(e=>this.handleAuthStateChange(e))}async getCurrentUser(){const e=(0,r.v0)();return{user:this.createUserResult(e.currentUser)}}async getIdToken(){var e;const t=(0,r.v0)();return{token:await(null===(e=t.currentUser)||void 0===e?void 0:e.getIdToken())||""}}async setLanguageCode(e){(0,r.v0)().languageCode=e.languageCode}async signInWithApple(){const e=new r.O4("apple.com"),t=(0,r.v0)(),n=await(0,r.rh)(t,e),s=r.O4.credentialFromResult(n);return this.createSignInResult(n.user,s)}async signInWithFacebook(){const e=new r._O,t=(0,r.v0)(),n=await(0,r.rh)(t,e),s=r._O.credentialFromResult(n);return this.createSignInResult(n.user,s)}async signInWithGithub(){const e=new r.O4("github.com"),t=(0,r.v0)(),n=await(0,r.rh)(t,e),s=r.O4.credentialFromResult(n);return this.createSignInResult(n.user,s)}async signInWithGoogle(){const e=new r.hJ,t=(0,r.v0)(),n=await(0,r.rh)(t,e),s=r.hJ.credentialFromResult(n);return this.createSignInResult(n.user,s)}async signInWithMicrosoft(){const e=new r.O4("microsoft.com"),t=(0,r.v0)(),n=await(0,r.rh)(t,e),s=r.O4.credentialFromResult(n);return this.createSignInResult(n.user,s)}async signInWithPlayGames(){throw new Error("Not available on web.")}async signInWithTwitter(){const e=new r.O4("twitter.com"),t=(0,r.v0)(),n=await(0,r.rh)(t,e),s=r.O4.credentialFromResult(n);return this.createSignInResult(n.user,s)}async signInWithYahoo(){const e=new r.O4("yahoo.com"),t=(0,r.v0)(),n=await(0,r.rh)(t,e),s=r.O4.credentialFromResult(n);return this.createSignInResult(n.user,s)}async signInWithPhoneNumber(e){throw new Error("Not implemented on web.")}async signInWithCustomToken(e){const t=(0,r.v0)(),n=await(0,r._p)(t,e.token);return this.createSignInResult(n.user,null)}async signOut(){const e=(0,r.v0)();await e.signOut()}async useAppLanguage(){(0,r.v0)().useDeviceLanguage()}handleAuthStateChange(e){const t=this.createUserResult(e);this.notifyListeners("authStateChange",{user:t})}createSignInResult(e,t){return{user:this.createUserResult(e),credential:this.createCredentialResult(t)}}createUserResult(e){return e?{displayName:e.displayName,email:e.email,emailVerified:e.emailVerified,isAnonymous:e.isAnonymous,phoneNumber:e.phoneNumber,photoUrl:e.photoURL,providerId:e.providerId,tenantId:e.tenantId,uid:e.uid}:null}createCredentialResult(e){if(!e)return null;const t={providerId:e.providerId};return e instanceof r.jh&&(t.accessToken=e.accessToken,t.idToken=e.idToken,t.secret=e.secret),t}}}}]);