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
 >  "Adversaries may manipulate software dependencies and development tools prior to receipt by a final consumer for the purpose of data or system compromise. Applications often depend on external software to function properly. Popular open source projects that are used as dependencies in many applications, such as pip and NPM packages, may be targeted as a means to add malicious code to users of the dependency.[2]"

NPM is literally called out by name four years before Shai-Hulud, and cites the `event-stream` 
library poisoning from 2018. MITRE continues to say about T1195.001:

> "Additionally, CI/CD pipeline components, such as GitHub Actions, may be targeted in order to gain access to the building, testing, and deployment cycles of an application.[8] By adding malicious code into a GitHub action, a threat actor may be able to collect runtime credentials (e.g., via Proc Filesystem) or insert further malicious components into the build pipelines for a second-order supply chain compromise."

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

But none of those reasons are failures of the NPM community or lanugage architects to solve a 
security problem. Futhermore, these attacks would work just as well for any programming language
with vibrant open-source communities supported by a decently-featured package management tool. 

## Mitigations

...

## Citations

[1] Shai-Hulud downloads from DataDog Security Labs; https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
[2] MITRE cites an NPM dependency attack from 2018: https://www.trendmicro.com/vinfo/gb/security/news/cybercrime-and-digital-threats/hacker-infects-node-js-package-to-steal-from-bitcoin-wallets
[3] Asi Greenholts presented reactions to the Github Actions Worm of 2023 at Defcon 31 https://www.youtube.com/watch?v=j8ZiIOd53JU (40 min)

~ Igelkott