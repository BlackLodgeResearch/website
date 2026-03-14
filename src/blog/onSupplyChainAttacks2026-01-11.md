---
layout: blog
tags: ["blog"]
title: "On The Shai-hulud Worm and Supply Chain Attacks"
date: 2019-01-01T00:00:00.000Z
---

# On The Shai-hulud Worm and Supply Chain Attacks

On September 15, 2025, the javascript ecosystem faced a critical supply chain attack that had wide
impact affecting many open-source libraries and products from first-party industry products. 
November 24th of the same year, a fresh phishing campaign sparked further infections. 
Shai-Hulud successfully backdoored over 800 Node JS repositories in total, with over 20 million 
weekly downloads [1]. 

This security researcher suggests that a Shai-Hulud-like incident was predicted by multiple 
researchers and organizations, and further suggests that it is likely to happen again. Potentially
on another platform, potentially with other packaging tools. 

## Shai-Hulud Was Not a Surprise

Supply-chain Compromise by malicious dependency injection is MITRE's ATT&CK Enterprise
attack Technique T1195.001, created in March 2020.
 >  "Adversaries may manipulate software dependencies and development tools prior 
 > to receipt by a final consumer for the purpose of data or system compromise. Applications 
 > often depend on external software to function properly. Popular open source projects that 
 > are used as dependencies in many applications, such as pip and NPM packages, may be targeted 
 > as a means to add malicious code to users of the dependency.[2]"

NPM is literally called out by name four years before Shai-Hulud, and cites the `event-stream` 
library poisoning from 2018. MITRE continues to say about T1195.001:

> "Additionally, CI/CD pipeline components, such as GitHub Actions, may be 
> targeted in order to gain access to the building, testing, and deployment 
> cycles of an application.[8] By adding malicious code into a GitHub action, 
> a threat actor may be able to collect runtime credentials (e.g., via Proc Filesystem) 
> or insert further malicious components into the build pipelines for a second-order 
> supply chain compromise."

Shai-Hulud leveraged .github/workflow.yml to call open-sourced [TruffleHog](https://trufflesecurity.com/trufflehog) to collect runtime
credentials (both from the filesystem and from the runtime enviornment) and to then insert
further malicious NPM components for further second-order supply chain compromise. It matches
the pattern described one begins to wonder if the author(s) of Shai-Hulud used the MITRE 
document as a blueprint! 

But MITRE was far from the only organization or researcher that this attack vector had occured to
prior to the compromise. Asi Greenholts presented [Github Actions Worm](https://www.youtube.com/watch?v=j8ZiIOd53JU) 
at DefCon 31 and BSides Las Vegas. His talk discussed in depth initial NPM package owner compromise, 
specific YAML for using Github Actions to propogate the worm, and introduced some techniques for
measuring and visualizing the spread of dependency compromise. 

Maksim Shudrak also researched supply chain worms in 2025 
and [presented his work at DefCon 33](https://www.youtube.com/watch?v=jraaS3lUP0I). Maksim's 
white hat research prevented many breaches all over the world. The field of research that is 
Supply Chain dependency poisoning needs further work much like that done by Maksim and Asi.

## Supply Chain Compromise is Not a Problem Unique to NPM

With two major waves of the Shai-Hulud NPM worm and no less than [four waves](https://www.bleepingcomputer.com/news/security/new-glassworm-malware-wave-targets-macs-with-trojanized-crypto-wallets/) 
of the GlassWorm info stealer targeting the 
NPM [ElectronJS framework](https://www.electronjs.org/) 
underneath Microsoft's Visual Studio Code, it would be easy to blame the NPM packaging tool
or NodeJS language itself. If one were prone to participating in unwise flame wars, one may
even blame the NodeJS community themselves for not being more security-concious. 
While some affectionate teasing is due those who can't be bothered to learn a different lanugage
for their backend and frontends, it is simply not the case that NPM is uniquely vulnerable to
supply chain attacks. 

There are a few factors that make NodeJS a particularly juicy target for Blackhat Hackers looking
to cause real damage, rather than to explore the state of the art or pursue responsible disclosure.

1. Javascript is very popular. 
2. Javascript is an interprited language, rather than a compiled one. 
3. Javascript is Highly Modular by design.

But none of those reasons are failures of the NPM community or lanugage 
architects to solve a security problem. Futhermore, these attacks would work 
just as well for any programming language with vibrant open-source communities 
supported by a decently-featured package management tool. 

## Mitigations

At this point hopefully you agree that CI/CD attacks are certaintly coming to a middle and that
more are probably on the way. Here are some suggestions and action items that this researcher 
suggests are worth the time for every developer on the internet to take.

The first is to go get a free open-source container of [Trufflehog](https://github.com/trufflesecurity/trufflehog) 
and run it against your codebase. The CI/CD malware devs are going to use it, 
so you should use it first and fix what you find. 

```
Roses are red,
Violets are blue,
if you hardcode your secrets,
then I'll use 'em too!
```

### Mitigations at Large Enterprises

The ideal solution to this problem in my opinion is to go buy either 
JFrog's *[Artifactory+Xray](https://jfrog.com/xray/)* or 
*[Nexus Vulnerability Scanner](https://support.sonatype.com/hc/en-us/articles/213463928-Nexus-Vulnerability-Scanner-FAQ)*.
Then configure every security option they have (2FA for admin, HTTPS 
and mTLS, High-availability, et al). 

Point all of your build repositories to the appropriate enterprise service 
endpoint like the pypi+Artifactory example below:

```
[global]
index-url = https://johnfrog:RANDOM_TOKEN_YWRtaW46QVBBVWJjTExkZTU4WT@my-awesome.jfrog.io/artifactory/api/pypi/pypi-local/simple
```

Each enterprise solution will have its own onboarding documentation for each 
available package manager. I won't maintain that documentation here lest this
version become out-of-date and unhelpful.

If your enterprise security team has more time than funds, I recommend 
setting up a *[Pulp](https://pulpproject.org/help/more/why-pulp/)* server 
on a hardened cloud image, then using custom python or ruby automation to 
periodically itterate through the live packages and post them to, say, 
Virus Total's API, rejecting those with true-positives for malware.

There's also an interesting solution leveraging *[Endor Lab's](https://www.endorlabs.com/use-cases/malware-detection)* 
platform with Malware detection enabled. It apparently orchestrates 
dependency version pinning at scale, which means you have exteremely
high precision avoiding both CVEs from out-of-date versions and 
supply-chain attacks on the bleeding edge. 

### Mitigations for Small Teams

If you don't have time or enterprise resources to throw at the problem, but 
your team is small enough that you can trust everyone to use particular
commandline tools other than the standard npm one, you could use either
AikidoSec's SafeChain or DataDog's Supply-Chain Firewall. 

These tools live
on your dev machine as command-line wrappers around standard install tooling
that reject attempts to install known-bad or not-yet-scanned packages. They too
need to be updated, and they don't abstract away the need to keep your package
manager of choice up-to-date, but they don't require their own live service to 
maintain or configure. The downside is that you can't point your .npmrc or 
pipfiles to a known-hardened repository to avoid the new developer from 
accidentally breaking the seal by reverting to standard install instructions.

Aikido Security's *[SafeChain](https://github.com/AikidoSec/safe-chain)* tool is 
a CLI that wraps npm, yarn, bun, pip, and more to block bleeding-edge and 
known-malicious packages. [5][6]  

Ironically, Aikido expects installing to be done from curl;
`curl -fsSL https://github.com/AikidoSec/safe-chain/releases/latest/download/install-safe-chain.sh `,
give it a read to make sure it's sane, then execute with `chmod +x install-safe-chain.sh && ./install-safe-chain.sh`

Then use NPM or pip normally; `npm install tinycolor` and safe-chain overwites 
and hooks the standard tools during installation.

DataDog's *[Supply-Chain Firewall](https://github.com/DataDog/supply-chain-firewall)* 
also supports NPM and Pip, but doesn't support yarn nor bun as of this writing.

`pip install scfw` to install Supply-chain firewall, then use like; 
`scfw run pip install <packagename>`.

Both options have at least a couple of years of steady support, which I find 
encouraging. As of this writing, neither options support Nuget nor Cargo, which 
I find concerning.

### Mitigations for Open-Source Package Developers

*Mitigation 1: Enable 2-factor Authentication* on all of your repositories. If indeed the initial 
compromise from Shai-Hulud was from Spearphishing, 2-Factor  authentication may 
have prevented the initial infections.

(2FA for NMP tutorial)[https://docs.npmjs.com/configuring-two-factor-authentication]. 
(@FA for PyPi)[https://blog.pypi.org/posts/2023-05-25-securing-pypi-with-2fa/]

*Mitigation 2: Please Semantic Version* all of your releases. 
(Semantic Versioning)[https://semver.org/] is a standard that makes pinning 
versions during an incident response activity or identifying and blocking a 
poisoned version to prevent an incident. Following this standard prevents the 
problem of identifying and preventing the installation of affected packages
from having more edge cases.


## Citations

[1] Shai-Hulud downloads from DataDog Security Labs; https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
[2] MITRE cites an NPM dependency attack from 2018: https://www.trendmicro.com/vinfo/gb/security/news/cybercrime-and-digital-threats/hacker-infects-node-js-package-to-steal-from-bitcoin-wallets
[3] Asi Greenholts presented reactions to the Github Actions Worm of 2023 at Defcon 31 https://www.youtube.com/watch?v=j8ZiIOd53JU (40 min)
[4] What is X-Ray? https://jfrog.com/xray/
[5] Mackenzie Jackson, July 21, 2025, Safe-Chain blog post by AkidoSec https://www.aikido.dev/blog/introducing-safe-chain
[6] Safe-Chain source code https://github.com/AikidoSec/safe-chain
[7] Ian Kretz, December 6, 2024, DataDog Supply-Chain Firewall https://securitylabs.datadoghq.com/articles/introducing-supply-chain-firewall/
[8] Supply-chain firewall source code. https://github.com/DataDog/supply-chain-firewall
[9] Truffle Security's Trufflehog, https://github.com/trufflesecurity/trufflehog
[10] Configuring two-factor authentication, Last edited by kartykp on December 11, 2025, https://docs.npmjs.com/configuring-two-factor-authentication
[11] Securing PyPI accounts via Two-Factor Authentication, Donald Stufft, May 25, 2023, https://blog.pypi.org/posts/2023-05-25-securing-pypi-with-2fa/
[12] Tom Preston-Werner, Semantic Versioning Standard 2.0.0, , https://semver.org/
[13] Nexus Vulnerability Scanner FAQ; 2023-04-27T18:21:53Z https://support.sonatype.com/hc/en-us/articles/213463928-Nexus-Vulnerability-Scanner-FAQ
[14] Jenn Gile, 2026-02-21, https://pulpproject.org/help/more/why-pulp/

~ Igelkott, 2026-03-14:1400