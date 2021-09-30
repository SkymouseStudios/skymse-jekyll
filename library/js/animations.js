$(function () { // wait for document ready
			

			gsap.registerPlugin(ScrollTrigger);

			// var fadeUp = gsap.fromTo('.card--review',
			// 					scrollTrigger: {
			// 						trigger: ".sm-package-right",
			// 						scrub: true
			// 					},
								
			// 					{opacity: 0}, 
			// 					{opacity: 0.5, duration: 1});
			// 				);

			// Small package flies on to screen (Panel 3)
			var packageRight = gsap.to('.sm-package-right', { 
									scrollTrigger: {
										trigger: ".sm-package-right",
										scrub: true
									},

									rotation: 80,
									right: 180, 
									top: 160, 
									ease: Circ.easeInOut
								}
			);

			// Section Freeze
			var websiteReview = gsap.to("#Panel5", {
					scrollTrigger: {
						trigger: "#Panel5", // selector or element
						start: "top", 
						pin: true, // or selector or element to pin
						//markers: true, // only during development!
					}
				}
			);

			// Inside scroll effect
			let image = document.querySelectorAll("#Panel5Image");
			let frame = document.querySelector(".frame");

			var Insides = gsap.to(image, {
					yPercent: -20,
  					ease: "none",
					scrollTrigger: {
						trigger: "#Panel5", // selector or element
						scrub: true,
						pin: true, // or selector or element to pin
						//pinType: "fixed",
						anticipatePin: 1, // can help avoid flash
						//markers: true, // only during development!
						end: () => "+=" + frame.offsetHeight
					}
				}
			);


			// Video Overlay Effects
			console.clear();

			const canvas = document.getElementById("sm-helicopter");
			const context = canvas.getContext("2d");

			canvas.width = document.body.clientWidth; //1158;
			canvas.height = 770;

			const frameCount = 254;
			const currentFrame = index => (
			  `/library/images/skymouse-7/video/video-helicopter/helicopter-${(index + 1).toString().padStart(5, '0')}.png`
			);

			const images = []
			const helicopter = {
			  frame: 0
			};

			for (let i = 0; i < frameCount; i++) {
			  const img = new Image();
			  img.src = currentFrame(i);
			  images.push(img);
			}

			gsap.to(helicopter, {
			  frame: frameCount - 1,
			  snap: "frame",
			  scrollTrigger: {
			    scrub: true,
			    duration: 500
			  },
			  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
			});

			images[0].onload = render;

			function render() {
			  context.clearRect(0, 0, canvas.width, canvas.height);
			  context.drawImage(images[helicopter.frame], 0, 0); 
			}

		});