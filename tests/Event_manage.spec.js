const { test, expect } = require('@playwright/test');

 
test("Book Event", async ({ page }) =>
{
const baseUrl = "https://eventhub.rahulshettyacademy.com";
await page.goto(`${baseUrl}/login`)

const Email_field = page.getByPlaceholder("you@email.com");
const Password_field = page.getByLabel("Password");
const Login_button = page.getByRole("button", { name: "Sign In" });

await Email_field.fill("yd@gmail.com");
await Password_field.fill("Yogesh8989@");
await Login_button.click(); 
console.log(await page.title());
await page.getByRole("a", { name: "Browse Events" }).isVisible();


//Step 2 — Create a new event

//- Navigate to /admin/events
await page.getByRole("button", { name: "Admin" }).click();
await page.locator("#nav-events").waitFor();
await page.locator("a[href='/admin/events']").first().click();

const eventTitle = `Test Event ${Date.now()}`;
console.log("Event Title:", eventTitle);
const eventDescription = "This is a test event created by Playwright automation.";

await page.locator("#event-title-input").fill(eventTitle);
await page.locator("#admin-event-form textarea").fill(eventDescription);
await page.getByLabel("City").fill("New York");
await page.getByLabel("Venue").fill("Madison Square Garden");
await page.getByLabel("Event Date & Time").fill("2026-12-31T11:11");
await page.getByLabel("Price ($)").fill("100");
await page.getByLabel("Total Seats").fill("50");
await page.locator("#add-event-btn").click();
await expect(page.getByText("Event created!")).toBeVisible();


//step 3

await page.locator("#nav-events").click();
await expect(page.locator('article[data-testid="event-card"]').first()).toBeVisible();
await expect(page.locator('article[data-testid="event-card"]').filter({ hasText: eventTitle })).toBeVisible();
const seatsBeforeBooking = await page.locator('article[data-testid="event-card"]').filter({ hasText: eventTitle }).getByText("seats available").textContent();
console.log(seatsBeforeBooking);
await page.locator('article[data-testid="event-card"]').filter({ hasText: eventTitle }).locator('#book-now-btn').click();

// Step 5 — Verify booking confirmation

await expect(page.locator('.ticket-count')).toHaveText("1");
await page.getByLabel("Full Name").fill("Yogesh Dixit");
await page.locator("#customer-email").fill("yd@gmail.com");
await page.getByLabel("Phone Number").fill("1234567890");
await page.locator(".confirm-booking-btn").click();

//Step 6 — Verify booking confirmation

const bookingRef = page.locator(".booking-ref");
console.log("Booking Reference:", bookingRef);
expect(bookingRef).toBeVisible();
const bookingRefText = await bookingRef.textContent();
console.log("Booking Reference:", bookingRefText);

await expect(page.getByText("Booking Confirmed! 🎉")).toBeVisible();

//set 7 — Verify that the number of available seats has decreased by 1

await page.locator("#nav-bookings").click();
await expect(page).toHaveURL(`${baseUrl}/bookings`);


await expect(page.locator('#booking-card').first()).toBeVisible();
const bookingCard = page.locator('#booking-card').getByText(bookingRefText);
await expect(bookingCard).toBeVisible();
await expect(page.locator('#booking-card').getByText(eventTitle)).toBeVisible();

//step 8 — Verify that the number of available seats has decreased by 1

await page.locator("#nav-events").click();
await page.locator('article[data-testid="event-card"]').filter({ hasText: eventTitle }).waitFor();
await expect(page.locator('article[data-testid="event-card"]').filter({ hasText: eventTitle })).toBeVisible();

const seatsAfterBooking = await page.locator('article[data-testid="event-card"]').filter({ hasText: eventTitle }).getByText("seats available").textContent();   
console.log(seatsAfterBooking);

const seatsBefore = parseInt(seatsBeforeBooking.match(/\d+/)[0]);
const seatsAfter = parseInt(seatsAfterBooking.match(/\d+/)[0]);
console.log("Seats Before Booking:", seatsBefore);
console.log("Seats After Booking:", seatsAfter);

expect(seatsAfter===(seatsBefore - 1)).toBeTruthy();    








});