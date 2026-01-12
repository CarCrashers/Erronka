<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<title>Egiaztatu zure posta elektronikoa</title>
	</head>
	<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #111;">
		<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
			<tr>
				<td align="center">
					<table width="600" cellpadding="0" cellspacing="0" role="presentation" style="margin: 24px auto;">
						<tr>
							<td style="padding: 24px; background: #fff; border-radius: 8px; text-align: center;">
								<h1 style="margin:0 0 8px; font-size:20px;">Kaixo {{ $user->name }}!</h1>
								<p style="margin:0 0 18px; color:#6b7280;">Mesedez, egin klik beheko botoian zure posta elektronikoko helbidea egiaztatzeko.</p>

								<p style="margin: 18px 0;">
									<a href="{{ $verificationUrl }}" style="display:inline-block; padding:12px 20px; background:#111827; color:#fff; border-radius:6px; text-decoration:none;">Egiaztatu e-posta</a>
								</p>

								<p style="margin:0; color:#6b7280; font-size:13px;">Esteka hau 60 minutu barru iraungiko da. Ez baduzu konturik sortu, ignore egin mezu hau.</p>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>
